import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const root = new URL("../", import.meta.url);
const sources = JSON.parse(await readFile(new URL("portfolio.sources.json", root), "utf8"));
const source = process.env.PORTFOLIO_CV_SOURCE || sources.cv;
const destination = new URL("public/Data_Engineer_Vu_Manh_Hung_CV.pdf", root);
const validPdf = (bytes) => bytes.length > 5 && bytes.subarray(0, 5).toString() === "%PDF-";
const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");

try {
  const bytes = await readFile(source);
  if (!validPdf(bytes)) throw new Error("The configured CV source is not a valid PDF.");
  let current;
  try { current = await readFile(destination); } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  if (!current || hash(current) !== hash(bytes)) {
    await writeFile(destination, bytes);
    console.log("CV synced from " + source);
  } else {
    console.log("CV is already up to date.");
  }
} catch (error) {
  if (error.code !== "ENOENT" || process.argv.includes("--required") || process.env.PORTFOLIO_CV_SOURCE) throw error;
  // CI/hosting cannot access a local Windows path; retain the checked-in snapshot.
  const snapshot = await readFile(destination);
  if (!validPdf(snapshot)) throw new Error("Neither the CV source nor a valid packaged CV is available.");
  console.warn("Local CV source unavailable; using the packaged PDF snapshot. Sync locally before publishing an updated CV.");
}
