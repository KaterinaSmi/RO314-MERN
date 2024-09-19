var fs = require('fs');

const content = fs.readFileSync('text_file.txt', 'utf8');
const content2 =  fs.readFileSync('text_file.txt', 'utf8');

const combined  = content + '\n' + content2

fs.writeFile('combined.txt', 'I wrote this!\n\n', (err) =>{
    if(err) {
        console.error('Error writing to file',err);
        return
    }else{
        console.log('File written successfully');

        fs.appendFile('combined.txt', combined + '\n\n', (err) => {
            if(err){
                console.error('Error appending combined content', err);
                return;
            }
            fs.appendFile('combined.txt', '\nI wrote this!', err => {
                if(err){
                    console.error('Error appending at the bottom', err)
                }else{
                    console.log('Appended successfully')
                }
            });
        });
    }
});