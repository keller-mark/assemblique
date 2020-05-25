import fs from 'fs';
import { join } from 'path';
import fetch from 'node-fetch';
import marked from 'marked';

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

export async function getPortfolioItemBySlug(slug) {
    const items = getPortfolioItems();
    const item = items.find(item => item.slug === slug);

    return fetch('https:' + item.path).then(res => res.text()).then((mdPost) => {
        const mdPostContent = mdPost.replace(/---[\s\S]*---/m, '');
        const htmlPost = marked(mdPostContent);
        const title = (!mdPostContent.trim().startsWith(item.title) ? item.title : null);
        return Promise.resolve([item, htmlPost, title]);
    })
}