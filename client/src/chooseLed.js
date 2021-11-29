import axios from 'axios'

export function chooseLed(mode) {
    axios.post('/set_mode', { mode: mode }).then((res) => {
        console.log(res.body)
    })
}