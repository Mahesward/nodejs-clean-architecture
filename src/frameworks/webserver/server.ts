// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function serverConfig(server: any, config) {
  const startServer = () => {
    const port = config.port;
    server.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  };

  return {
    startServer,
  };
}
