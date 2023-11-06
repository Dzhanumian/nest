import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjk5Mjg3MzU1LCJleHAiOjE2OTkyOTA5NTV9.BrtmhMUt1mPnYcUIdHQTR4U5GAwx5QeEHRXWyiRNzt4'

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/tasks (GET)', () => {
    return request(app.getHttpServer())
        .get('/tasks')
        .set('Authorization', 'Bearer '+accessToken)
        .expect(200);
  });

  it('/tasks (POST)', () => {
    return request(app.getHttpServer())
        .post('/tasks')
        .send({ name: 'Новая задача' })
        .set('Authorization', 'Bearer '+accessToken)
        .expect(201)
        .expect(res => {
          expect(res.body).toEqual(
              expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
              }),
          );
        })
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
