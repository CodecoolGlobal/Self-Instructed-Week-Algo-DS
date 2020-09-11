class TeamReshuffle {
    originalTeam: string[][] = this.returnDataFromCsv();

    newTeam: string[][] = this.returnDataFromCsv();

    private returnDataFromCsv(): string[][] {
        const fs = require('fs');

        const data = fs.readFileSync('dreamTeam.csv')
            .toString() // convert Buffer to string
            .split('\n') // split string to lines
            .map((e: string) => e.trim()) // remove white spaces for each line
            .map((e: string) => e.split(',').map(e => e.trim())); // split each line to array
        return data
    }

    printOriginalTeam(){
        console.log(this.originalTeam);
    }

    createReshuffledTeam() {

        const arrayLength = this.originalTeam[0].length;
        let i = 0;
        let j = 0;
        let counter = 0;

        while (counter < arrayLength) {
            this.newTeam[i][j] = this.originalTeam[j][i];
            i++;
            if (i === arrayLength) {
                i = 0;
                j++;
                counter++;
            }
        }
        console.log(this.newTeam);
    }
}

const reshuffledTeam = new TeamReshuffle();
reshuffledTeam.printOriginalTeam();
reshuffledTeam.createReshuffledTeam();
