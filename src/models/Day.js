import Model from './Model';

export default class Day extends Model {

    date = null;
    list_tasks = [];
    static _nameAttribute = 'days';
   
    static findAll() {

        const rawKeys = super.getAll() ?? [];
        const keys = []

        for (let rawKey of rawKeys) {
            const key = new this()

            key.setAttribute('id', rawKey.id);
            key.setAttribute('date', rawKey.date);
            key.setAttribute('list_tasks', rawKey.list_tasks);

            keys.push(key)
        }

        return keys
    }


}


