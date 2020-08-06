class Console
{
	constructor (obj)
	{
		this.readline = require ('readline').createInterface ({
			input: obj.inp,
			output: obj.out,
		});
	}

	Write (txt)
	{
		console.log (txt);
	};

	Read (inp, cb)
	{
		this.readline.question (inp, cb);
	}

    Clear ()
    {
        console.clear ();
    }

    Eval (f)
    {
	let result = eval (f);

	console.log (result);
    }

    Error (e)
    {
	throw e;
    }

    Die ()
    {
	process.exit (0);
    }
}

module.exports = Console;
