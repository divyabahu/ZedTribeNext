
import fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'GET') {
    getNotes(req, res);
  } else if (req.method === 'POST') {
    createNote(req, res);
  }
}

function getNotes(req, res) {
  let data = [];
  try {
    const rawData = fs.readFileSync('./data.json');
    data = JSON.parse(rawData);
  } catch (error) {
    console.error(error);
  }
  res.json(data);
}

function createNote(req, res) {
  const { id, notes } = req.body;
  const newData = { id, notes };
  let data = [];
  try {
    const rawData = fs.readFileSync('./data.json');
    data = JSON.parse(rawData);
  } catch (error) {
    console.error(error);
  }
  data.push(newData);
  try {
    fs.writeFileSync('./data.json', JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
  res.send(`Data with ID ${id} added to data.json file`);
}