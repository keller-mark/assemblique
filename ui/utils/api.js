import fs from 'fs';
import { join } from 'path';

const contentDirectory = join(process.cwd(), "content");

export function getIndex() {
    const fullPath = join(contentDirectory, "index.json");
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
}

export function getRecentWorks() {
    const index = getIndex();
    return index.portfolio.slice(0, 4);
}

export function getRecentPress() {
    const index = getIndex();
    return index.press.slice(0, 4);
}

export function getPortfolioItems() {
    const index = getIndex();
    return index.portfolio;
}