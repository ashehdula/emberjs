import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		toggleActive(monster)
		{
				monster.toggleProperty('active');
				monster.save();
		},
		createm(monster){

			let newm = this.get('newtest')
			let news = this.get('newsect')
				this.store.createRecord('monster', {
 	 		name: newm,
  			level: news

		});
				monster.save();
		
	}
}	
});
