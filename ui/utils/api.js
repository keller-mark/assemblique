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

// Getters for home page items.
export function getRecentWorks() {
    const index = getIndex();
    return index.portfolio.slice(0, 4);
}

export function getRecentPress() {
    const index = getIndex();
    return index.press.slice(0, 4);
}

// Getters for all items of a particular category.
export function getPortfolioItems() {
    const index = getIndex();
    return index.portfolio;
}

export function getCommissionsItems() {
    const index = getIndex();
    return index.commissions;
}

export function getForSaleItems() {
    const index = getIndex();
    return index.forsale || [];
}

export function getEventsItems() {
    const index = getIndex();
    return index.events;
}

export function getPressItems() {
    const index = getIndex();
    return index.press;
}

// Getters for individual item from particular category.
export async function getItemBySlug(slug, items) {
    const item = items.find(item => item.slug === slug);

    return fetch('https:' + item.path).then(res => res.text()).then((mdPost) => {
        const mdPostContent = mdPost.replace(/---[\s\S]*---/m, '');
        const htmlPost = marked(mdPostContent);
        const title = (!mdPostContent.trim().startsWith(item.title) ? item.title : null);
        return Promise.resolve([item, htmlPost, title]);
    })
}

export async function getPortfolioItemBySlug(slug) {
    const items = getPortfolioItems();
    return getItemBySlug(slug, items);
}

export async function getCommissionsItemBySlug(slug) {
    const items = getCommissionsItems();
    return getItemBySlug(slug, items);
}

export async function getForSaleItemBySlug(slug) {
    const items = getForSaleItems();
    return getItemBySlug(slug, items);
}

export async function getEventsItemBySlug(slug) {
    const items = getEventsItems();
    return getItemBySlug(slug, items);
}

export async function getPressItemBySlug(slug) {
    const items = getPressItems();
    return getItemBySlug(slug, items);
}