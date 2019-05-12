import axios from 'axios';

async function getContents() {
    console.log('getContents');
    try {
        return (await axios.get('https://raw.githubusercontent.com/uehara-mech/uehara-mech.github.io/gh_pages/contents.yaml?token=AFORA7NYVXYCHXDUSVCICFK44FSUS', 
        )).data;
    } catch (error) {
        console.log(error);
        return 'failed';
    }

}

export default getContents;