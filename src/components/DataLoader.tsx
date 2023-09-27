async function DataLoader() {

  const res = await fetch("./test.json");
  const jsongs: [] | null = await res.json();
  
  return jsongs;
}

export default DataLoader;
