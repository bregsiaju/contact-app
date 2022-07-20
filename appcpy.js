const contacts = require("./contactscpy");

const main = async () => {
	const nama = await contacts.tulisPertanyaan("Masukkan nama : ");
	const email = await contacts.tulisPertanyaan("Masukkan email : ");
	const noHP = await contacts.tulisPertanyaan("Masukkan no HP : ");

	contacts.simpanContact(nama, email, noHP);
};

main();
