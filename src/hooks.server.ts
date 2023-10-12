import { ubuilder } from "$lib/server/ubuilder";
import qs from "qs";




export const handle = async ({ event, resolve }) => {
  const api = ubuilder({fetch: event.fetch, baseUrl: 'http://localhost:3000/api'})
  
  event.locals.api = api
  // if(!existsSync('./data')) {
  //   mkdirSync('./data');
  //   await writeFile('data/db.json', "{}");
  // }

  // const sitesDb = connect({ filename: "data/db.json" });
  // const sites = await sitesDb.getModel("sites").query();

  // let siteId;

  // for (let site of sites.data) {
  //   if (
  //     event.request.headers.get("host") &&
  //     site.domains.includes(event.request.headers.get("host"))
  //   ) {
  //     siteId = site.id;
  //   }
  // }

  // if (!siteId && event.request.headers.get("host")?.includes("localhost")) {
  //   siteId = event.url.port;
  // }
  // let siteId = event.params.site;
  // if (!siteId) throw new Error("Site not found");

  // if(!existsSync("data/" + siteId)) {
  //   mkdirSync("data/" + siteId)
  //   mkdirSync("data/" + siteId + '/assets')
  // }
  // get model based on domain
  // const { getModel } = connect({ filename: "data/" + siteId + "/db.json" }); // based on url
  //   event.locals.db = (table: string) => {
  //   const db = getModel(table);
  //   const historyDb = getModel(table + '_history');

  //   async function insert(data: any) {
  //     const res = await db.insert(data)
  //     await historyDb.insert({...res, _is_deleted: false})
  //     return res;
      // const [id] = await db.insert({...data, 
      //   _is_deleted: false, 
      //   _published: true
      // })
      // await db.update(id, {
      //   _id: id
      // })

      // return [id]
    // }

    // async function update(id: string, data: any) {

    //   const row = await db.get({where: {id}});
    //   await historyDb.insert({...row, ...data});
    //   // Audit table
    //   return db.update(id, data)
    //   // return db.insert({
    //   //   _id: id,
    //   //   data,
    //   //   _is_deleted: false,
    //   //   _published: false,  
      // })
    // }

    // async function query({where, with: with_}: any) {
      // return db.query({
      //   where: {...where, _is_deleted: false, _published: true},
      //   with: with_
      // })
    // }

    // async function get({where, with: with_}: any) {
    //   if(where['id']) {
    //     where['_id'] = where['id']
    //     delete where['id']
    //   }

    //   return db.get({
    //     where: {...where, _is_deleted: false, _published: true},
    //     with: with_
    //   })
    // }
    // async function remove(id: string) {
    //   await historyDb.insert({id, _is_deleted: true});
    //   return db.remove(id)
    //   // const data = await db.get({where: {_id: id}})
    //   // return db.update(data.id, {
    //   //   _is_deleted: true
    //   // })
    // }

    // return {
    //   insert,
    //   update, 
    //   remove, 
    //   get: db.get, 
    //   query: db.query,
    //   history: historyDb.query,
    //   rollback: (id: string, item: any) => {
    //     return db.update(id, item);
      // }
      // async publish(new_id: string) {
      //   const data = await db.get({where: {id: new_id}});

      //   await db.update(data.id, {
      //     is_published: false
      //   })
      //   await db.update(new_id, {
      //     is_published: true
      //   })
      // }
  //   }
  // }

  // if (true) {
  //   const userId = 'user_id'
  //   // const user = event.locals
  //   //   .db<any>("u-users")
  //   //   .get({ where: { id: event.cookies.get("auth") } });
  //   let user;
  //   try {
  //     user = await api.getUser()
  //   } catch (err) {
  //     console.log('you are not logged in')

  //   }
  //   // event.locals.user = 

  //   // event.locals.user = user;
  // }

  // if(!event.locals.user && event.request.headers.get('host')?.includes('localhost') && enable_test_user) {
  //   event.locals.user = {
  //     id: '123',
  //     name: 'Default',
  //     email: 'default@gmail.com',
  //     username: 'default',
  //     profile: '',
  //     password: '123_hashed'
  //   }
  // }

  event.locals.siteId = '5173';

  if (event.request.method === "GET") {
    const obj = qs.parse(event.url.search.substring(1));

    event.locals.filters = obj.filters;
  }

  return resolve(event);
};
