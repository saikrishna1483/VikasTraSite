import { NextResponse } from 'next/server';
import { writeFile, readFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import path from 'node:path';

const dataPath = path.join(process.cwd(), 'contacts.json');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, message } = body;

    if (!name || !message) {
      return NextResponse.json({ error: 'Name and message are required.' }, { status: 400 });
    }

    const submittedAt = new Date().toISOString();
    const contactEntry = {
      id: randomUUID(),
      name: String(name).trim(),
      message: String(message).trim(),
      submittedAt,
    };

    let existing = [];
    try {
      const fileData = await readFile(dataPath, 'utf8');
      existing = JSON.parse(fileData ?? '[]');
      if (!Array.isArray(existing)) {
        existing = [];
      }
    } catch (error) {
      existing = [];
    }

    existing.push(contactEntry);
    await writeFile(dataPath, JSON.stringify(existing, null, 2), 'utf8');

    return NextResponse.json({ success: true, entry: contactEntry });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save contact entry.' }, { status: 500 });
  }
}
