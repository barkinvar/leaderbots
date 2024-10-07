FROM oven/bun:1

WORKDIR /home/leaderbots/

COPY package*.json /home/leaderbots/
RUN bun install

COPY . /home/leaderbots/
RUN rm -rf .next

EXPOSE 3000

CMD ["bun", "run", "dev"]
