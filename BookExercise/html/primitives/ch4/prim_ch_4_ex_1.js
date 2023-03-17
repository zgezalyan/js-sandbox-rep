styles = ['Jazz', 'Blues']
alert(styles);
styles.push('Rock-n-roll');
alert(styles);
styles[Math.floor((styles.length - 1) / 2)] = 'Classic';
alert(styles);
alert(styles.shift());
alert(styles);
styles.unshift('Rap', 'Raggae');
alert(styles);