import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { getConfigToken, IConfig, NodeConfigModule } from '../module';

let app: INestApplication;

beforeAll(async () => {
    const mod = await Test.createTestingModule({
        imports: [
            NodeConfigModule
        ]
    }).compile();
    app = mod.createNestApplication();
    await app.init();
});

describe('Module', () => {
    it('should initialize the module and get values', () => {
        const config = app.get<IConfig>(getConfigToken());
        expect(config).toBeDefined();
        expect(config.get('foo')).toBe('bar')
        expect(config.get('bar')).toBe('foo')
    })

})