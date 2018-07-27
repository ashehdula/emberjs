import Controller from '@ember/controller';

export default Controller.extend({
actions: {
toggleActive(monster)
{
		monster.toggleProperty('active');
		monster.save();
},
createm(){

	let newm = this.get('newtest');
	let news = this.get('newsect');

	let monster =	this.store.createRecord('monster', {
 		name: newm,
		level: news


});
		console.log(monster);
		monster.save();
		console.log(newm);
		console.log(news);
		console.log("test");
		location.reload();

},

	del(monster){
		 
		monster.destroyRecord();
		monster.save();
		location.reload();


	}


}	
});
