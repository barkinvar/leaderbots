# Base stage
FROM oven/bun:1 AS core-base

WORKDIR /home/leaderbots/components/core
COPY . .
RUN bun install
RUN bun prisma generate

# Restapi stage
FROM core-base AS core-rest-api

WORKDIR /home/leaderbots/components/core
EXPOSE 8000
CMD ["bun", "run", "rest-api:dev"]