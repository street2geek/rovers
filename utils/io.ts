export async function feedInput(): Promise<string> {
  let command = "";
  try {
    command = await Deno.readTextFile("./input.txt");
  } catch (err) {
    console.log(err);
  }

  return command;
}
