FROM node:22.22.1-bookworm-slim
WORKDIR /workspace
COPY . .
RUN chown -R node:node /workspace
USER node
CMD ["npm", "test"]
