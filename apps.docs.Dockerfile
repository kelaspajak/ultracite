# apps.docs.Dockerfile

# --- Tahap 1: Build ---
# Gunakan image Node.js 18 (sesuai .tool-versions di repo)
FROM node:18-alpine AS builder
# Install pnpm (sesuai versi di repo)
RUN npm install -g pnpm@8
WORKDIR /app

# Salin file manajemen paket
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
# Install semua dependencies
RUN pnpm install

# Salin sisa kode
COPY . .

# Build HANYA aplikasi 'docs'
# (Perintah ini diambil dari package.json: "build:docs")
RUN pnpm --filter "docs" build

# --- Tahap 2: Produksi ---
# Mulai dari image baru yang bersih
FROM node:18-alpine
RUN npm install -g pnpm@8
WORKDIR /app

# Salin file paket yang relevan dari tahap build
COPY --from=builder /app/pnpm-workspace.yaml ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/package.json ./

# Salin folder 'docs' yang sudah di-build (termasuk .next)
COPY --from=builder /app/apps/docs ./apps/docs
# Salin next.config.js (penting untuk 'next start')
COPY --from=builder /app/apps/docs/next.config.js ./apps/docs/

# Install HANYA dependencies produksi
RUN pnpm install --prod

# Pindah ke direktori kerja aplikasi 'docs'
WORKDIR /app/apps/docs
ENV NODE_ENV production
EXPOSE 3000

# Jalankan aplikasi (sesuai package.json: "start:docs")
CMD ["pnpm", "start"]