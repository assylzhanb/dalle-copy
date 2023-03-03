// import FileSaver from 'file-saver';
import { surpriseMeTexts } from '../scripts';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMeTexts.length);
    const randomPrompt = surpriseMeTexts[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

// export async function downloadImage(_id, photo) {
//     FileSaver.saveAs(photo, `download-${_id}.jpg`);
// }