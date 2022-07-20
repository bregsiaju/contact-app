const yargs = require("yargs");
const { simpanContact } = require("./contacts");

yargs.command({
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
});

yargs.parse();

// yargs.command(
// 	"add",
// 	"Menambahkan contact baru",
// 	() => {},
// 	() => {},
// 	(argv) => {
// 		console.log(argv.nama);
// 	}
// );

// const contact = {
// 	nama: argv.nama,
// 	email: argv.email,
// 	noHP: argv.noHP,
// };
// mendapatkan data
// console.log(contact);

// node app add --nama="Bregsi AJ" --email="bregsia@gmail.com" --noHP="085784632839"
