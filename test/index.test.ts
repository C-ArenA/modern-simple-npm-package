import { it, describe, expect, assert } from 'vitest';
import { author_name, author_mail, author_nickname } from '../src/utils';
import message
 from '../src';
describe('Utils', () => {
	it('Author name', ()=>{
		assert.equal(author_name(), "Carlos Arena");
	});
	it('Author name', ()=>{
		assert.notEqual(author_name(), "Carlos Arenas");
	});
	it('Author email', ()=>{
		assert.equal(author_mail(), "carlostata.ca@gmail.com");
	});
	it('Author email', ()=>{
		assert.notEqual(author_mail(), "carlostata.ca@hotmail.com");
	});
	it('Author nickname', ()=>{
		assert.equal(author_nickname(), "arenamovediza");
	});
})

describe("index", ()=>{
	it('message', ()=>{
		assert.isString(message)
	})
})