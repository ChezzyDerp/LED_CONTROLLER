import axios from 'axios'

export function choseLed(mode) {
    axios.post('/set_mode', { mode: mode }).then((res) => {
        console.log(res.body)
    })
}