// TODO: replace javascript object in `main.ts`
//
// Placeholder function to match interface expected by `obsidian-database-library\indexer.worker.ts`
export async function indexWorker(
  files: string[],
  _settings: unknown,
): Promise<unknown[]> {
  return files.map(() => ({}));
}
