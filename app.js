const yargs = require("yargs");
const { simpanContact, listContacts, detailContact, deleteContact } = require("./contacts");

yargs
	.command({
		command: "add",
		describe: "Menambahkan contact baru",
		builder: {
			nama: {
				describe: "Nama lengkap",
				demandOption: true,
				type: "string",
			},
			email: {
				describe: "Email",
				demandOption: false,
				type: "string",
			},
			noHP: {
				describe: "Nomor Handphone",
				demandOption: true,
				type: "string",
			},
		},
		handler(argv) {
			simpanContact(argv.nama, argv.email, argv.noHP);
		},
	})
	.demandCommand();

// menampilkan daftar nama dan no hp semua contact
yargs.command({
	command: "list",
	describe: "Menampilkan daftar nama dan no hp semua contact",
	handler() {
		listContacts();
	},
});

// menampilkan detail contact berdasarkan nama
yargs.command({
	command: "detail",
	describe: "Menampilkan detail sebuah contact berdasarkan nama",
	builder: {
		nama: {
			describe: "Nama lengkap",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		detailContact(argv.nama);
	},
});

// menghapus contact berdasarkan nama
yargs.command({
	command: "delete",
	describe: "Menghapus sebuah contact berdasarkan nama",
	builder: {
		nama: {
			describe: "Nama lengkap",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		deleteContact(argv.nama);
	},
});

yargs.parse();

// node app add --nama="Bregsi AJ" --email="bregsia@gmail.com" --noHP="085784632839"
