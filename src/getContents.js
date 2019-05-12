import axios from 'axios';

async function getContents() {
    console.log('getContents');
    try {
        return (await axios.get('https://raw.githubusercontent.com/uehara-mech/gh_pages/dev/contents.yaml', 
        )).data;
    } catch (error) {
        console.log(error);
        return 'failed';
    }

}

export default getContents;