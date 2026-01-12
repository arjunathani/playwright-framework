import fs from 'fs';
import path from 'path';

export async function writeBookDetails(book, browserName) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const folderPath = path.join(process.cwd(), 'test-results', 'book-details');

  // Create folder if it doesn't exist
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const fileName = `bookDetails_${browserName}_${timestamp}.txt`;
  const filePath = path.join(folderPath, fileName);

  const data = `
Title: ${book.title}
Author: ${book.author}
Publisher: ${book.publisher}
Browser: ${browserName}
`;

  fs.writeFileSync(filePath, data);
  console.log(`Book details written for ${browserName} at ${filePath}`);

  return filePath; // return path for attachment
}
