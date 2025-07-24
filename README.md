# Berneby Development Website

Eine moderne, performante Website für berneby development mit Next.js 15, Strapi CMS und NestJS Backend.

## 🚀 Schnellstart mit Docker

### Voraussetzungen
- Docker und Docker Compose installiert
- Node.js 18+ (für lokale Entwicklung)

### Ein-Klick-Setup
```bash
# Klone das Repository
git clone <repository-url>
cd berneby-homepage

# Starte die gesamte Entwicklungsumgebung
docker-compose up -d

# Warte bis alle Services gestartet sind (ca. 2-3 Minuten)
```

### Zugriff auf die Services
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Strapi CMS**: http://localhost:1337
- **PostgreSQL**: localhost:5432

### Stoppen der Services
```bash
docker-compose down
```

## 🛠️ Lokale Entwicklung

### Frontend (Next.js)
```bash
cd berneby-website
npm install
npm run dev
```

### Backend (NestJS)
```bash
cd backend
npm install
npm run start:dev
```

### CMS (Strapi)
```bash
cd cms
npm install
npm run develop
```

## 📁 Projektstruktur

```
berneby-homepage/
├── berneby-website/     # Next.js Frontend
├── backend/            # NestJS Backend
├── cms/               # Strapi CMS
├── prd/               # Product Requirements
├── tasks/             # Task Listen
└── docker-compose.yml # Docker Orchestration
```

## 🔧 Konfiguration

### Environment-Variablen
Erstelle `.env.local` Dateien in den jeweiligen Verzeichnissen:

**berneby-website/.env.local:**
```
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
NEXT_PUBLIC_BACKEND_API_URL=http://localhost:3001
```

**backend/.env:**
```
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:3000
```

**cms/.env:**
```
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi123
```

## 🧪 Testing

```bash
# Frontend Tests
cd berneby-website
npm test

# Backend Tests
cd backend
npm test

# E2E Tests
npm run test:e2e
```

## 📦 Deployment

### Production Build
```bash
# Frontend
cd berneby-website
npm run build

# Backend
cd backend
npm run build

# CMS
cd cms
npm run build
```

### Docker Production
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 🤝 Contributing

1. Fork das Repository
2. Erstelle einen Feature Branch
3. Committe deine Änderungen
4. Push zum Branch
5. Erstelle einen Pull Request

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.

## 🆘 Support

Bei Fragen oder Problemen erstelle ein Issue im Repository oder kontaktiere das Entwicklungsteam. 