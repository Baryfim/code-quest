export default class QuestServices {
    static async getAll() {
        let response = await fetch('https://64fa7e5ecb9c00518f79f313.mockapi.io/api/v1/Questions')
        return await response.json()
    }
}
