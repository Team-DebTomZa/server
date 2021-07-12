const request = require('supertest');
const { app }= require('../app');

describe('API server', () => {
    let api;

    let testEntry = {
        title: 'blog1',
        content: 'i was going for a long long walk...'
    };

    let testNoTitle = {
        content: 'how I broke into coding...'
    };

    let updateData = {
        "emojis": [1,2,3],
        "newComment": "Great Post!"
    }

    let port = 5000;

    beforeAll(()=>{
        api = app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
    })

    test('Get request to root url responds with status 200', (done) => {
        request(api).get('/').expect(200,done);
    })

    test('Get items responds with status 200', (done)=>{
        request(api).get('/journals').expect(200,done);
    })

    test('Posting a new entry responds with status 201', (done) => {
        request(api)
        .post('/journals')
        .send(testEntry)
        .set('Accept', /application\/json/)
        .expect(201,done)
    })

    test('Posting a new entry with no title responds with status 401', (done) => {
        request(api)
        .post('/journals')
        .send(testNoTitle)
        .set('Accept', /application\/json/)
        .expect(401,done)
    })

    test('Updating an entry responds with status 200', (done) => {
        request(api)
        .patch('/journals/1')
        .send(updateData)
        .set('Accept', /application\/json/)
        .expect(200,done)
    })

    test('Trying to update an entry with an invalid journal id responds with status 409', (done) => {
        request(api)
        .patch('/journals/100000')
        .send(updateData)
        .set('Accept', /application\/json/)
        .expect(409,done)
    })

    test('responds to deleteall with status 204', async () => {
        await request(api).delete('/journals/deleteall/1234').expect(204);

        const updatedTasks = await request(api).get('/journals');

        expect(updatedTasks.body.length).toBe(0);
    });

    afterAll((done) => {
        console.log('server closed');
        api.close(done)
    })
})