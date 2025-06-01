FROM node:24.0.2-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

FROM mcr.microsoft.com/playwright:v1.52.0-jammy

WORKDIR /app

COPY --from=builder /app /app

RUN groupadd -r playwright && useradd -r -g playwright playwright \
    && mkdir -p /home/playwright/Downloads /app/test-results /app/playwright-report \
    && chown -R playwright:playwright /home/playwright /app

USER playwright

ENV CI=true
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
ENV NODE_ENV=production

ENTRYPOINT ["npx", "playwright", "test"]

CMD ["--reporter=html,line"] 