# We followed this guide:
# https://bun.com/docs/guides/ecosystem/docker

FROM oven/bun:1.3.1-alpine AS base

# Create app directory
WORKDIR /usr/src/app

# Install dependencies into temp directory for cache optimization.
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Install with --production to exclude devDependencies.
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Copy node_modules from temp directory.
# Then copy all (non-ignored) project files into the image.
FROM base AS prerelease
COPY . .

# Copy production dependencies and source code into final image.
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/ .
COPY --from=prerelease /usr/src/app/package.json .

# Run the app.
ENV NODE_ENV=production
ENV PORT=80

USER bun
EXPOSE ${PORT}/tcp
ENTRYPOINT [ "bun", "run", "start" ]
