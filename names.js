
      function NameStartup() {
         var nameWord = new Array(
			"<img src='logo/hose.png' alt='hose' />",
			"<img src='logo/tech.png' alt='tech' />",
			"<img src='logo/make.png' alt='chew' />",
			"<img src='logo/sosh.png' alt='sosh' />",
			"<img src='logo/launch.png' alt='launch' />",
			"<img src='logo/disrupt.png' alt='disrupt' />",
			"<img src='logo/craft.png' alt='craft' />",
			"<img src='logo/desk.png' alt='desk' />",
			"<img src='logo/perk.png' alt='perk' />",
			"<img src='logo/fin.png' alt='fin' />",
			"<img src='logo/content.png' alt='content' />",
			"<img src='logo/chew.png' alt='chew' />",
			"<img src='logo/think.png' alt='think' />",
			"<img src='logo/fidget.png' alt='fidget' />",
			"<img src='logo/chirp.png' alt='chirp' />",
			"<img src='logo/promp.png' alt='promp' />",
			"<img src='logo/plop.png' alt='plop' />",
			"<img src='logo/plate.png' alt='plate' />",
			"<img src='logo/urban.png' alt='urban' />",
			"<img src='logo/boom.png' alt='boom' />",
			"<img src='logo/zoom.png' alt='zoom' />",
			"<img src='logo/user.png' alt='user' />",
			"<img src='logo/jerk.png' alt='jerk' />",
			"<img src='logo/plink.png' alt='plink' />",
			"<img src='logo/ponk.png' alt='ponk' />",
			"<img src='logo/twup.png' alt='twup' />",
			"<img src='logo/ul.png' alt='ul' />",
			"<img src='logo/op.png' alt='op' />",
			"<img src='logo/app.png' alt='app' />",
			"<img src='logo/build.png' alt='build' />",
			"<img src='logo/spark.png' alt='spark' />",
			"<img src='logo/bonk.png' alt='bonk' />",
			"<img src='logo/honk.png' alt='honk' />",
			"<img src='logo/hub.png' alt='hub' />",
			"<img src='logo/dig.png' alt='dig' />",
			"<img src='logo/shyft.png' alt='shyft' />",
			"<img src='logo/scoot.png' alt='scoot' />",
			"<img src='logo/tint.png' alt='tint' />",
			"<img src='logo/zu.png' alt='zu' />",
			"<img src='logo/on.png' alt='on' />",
			"<img src='logo/off.png' alt='off' />",
			"<img src='logo/up.png' alt='up' />",
			"<img src='logo/nosh.png' alt='nosh' />",
			"<img src='logo/tuft.png' alt='tuft' />",
			"<img src='logo/drag.png' alt='drag' />",
			"<img src='logo/yoop.png' alt='yoop' />",
			"<img src='logo/you.png' alt='you' />",
			"<img src='logo/yup.png' alt='yup' />",
			"<img src='logo/yep.png' alt='yep' />",
			"<img src='logo/yes.png' alt='yes' />",
			"<img src='logo/take.png' alt='take' />",
			"<img src='logo/tidy.png' alt='tidy' />",
			"<img src='logo/romp.png' alt='romp' />",
			"<img src='logo/scale.png' alt='scale' />",
			"<img src='logo/cloud.png' alt='cloud' />",
			"<img src='logo/du.png' alt='du' />",
			"<img src='logo/big.png' alt='big' />",
			"<img src='logo/my.png' alt='my' />",
			"<img src='logo/flick.png' alt='flick' />",
			"<img src='logo/fling.png' alt='fling' />",
			"<img src='logo/flip.png' alt='flip' />",
			"<img src='logo/flock.png' alt='flock' />",
			"<img src='logo/gulp.png' alt='gulp' />",
			"<img src='logo/grup.png' alt='grup' />",
			"<img src='logo/hash.png' alt='hash' />",
			"<img src='logo/go.png' alt='go' />",
			"<img src='logo/twitch.png' alt='twitch' />",
			"<img src='logo/data.png' alt='data' />",
			"<img src='logo/top.png' alt='top' />",
			"<img src='logo/tip.png' alt='tip' />",
			"<img src='logo/next.png' alt='next' />",
			"<img src='logo/crimp.png' alt='crimp' />",
			"<img src='logo/krump.png' alt='krump' />",
			"<img src='logo/all.png' alt='all' />",
			"<img src='logo/poach.png' alt='poach' />",
			"<img src='logo/insta.png' alt='insta' />",
			"<img src='logo/bink.png' alt='bink' />",
			"<img src='logo/un.png' alt='un' />",
			"<img src='logo/re.png' alt='re' />",
			"<img src='logo/slack.png' alt='slack' />"
			);
         var suffix = new Array(
			"<img src='logo/suffix/r.png' alt='r' />",
			"<img src='logo/suffix/ly.png' alt='ly' />",
			"<img src='logo/suffix/sy.png' alt='sy' />",
			"<img src='logo/suffix/ity.png' alt='ity' />",
			"<img src='logo/suffix/eo.png' alt='eo' />",
			"<img src='logo/suffix/me.png' alt='dot me' />",
			"<img src='logo/suffix/vest.png' alt='vest' />",
			"<img src='logo/suffix/bit.png' alt='bit' />",
			"<img src='logo/suffix/able.png' alt='able' />",
			"<img src='logo/suffix/fuse.png' alt='fuse' />",
			"<img src='logo/suffix/hub.png' alt='hub' />",
			"<img src='logo/suffix/tub.png' alt='tub' />",
			"<img src='logo/suffix/api.png' alt='API' />",
			"<img src='logo/suffix/io.png' alt='dot io' />",
			"<img src='logo/suffix/lo.png' alt='lo' />",
			"<img src='logo/suffix/pop.png' alt='pop' />",
			"<img src='logo/suffix/hero.png' alt='hero' />",
			"<img src='logo/suffix/labs.png' alt='labs' />",
			"<img src='logo/suffix/modo.png' alt='modo' />",
			//"<img src='logo/suffix/share.png' alt='share' />",
			"<img src='logo/suffix/box.png' alt='box' />",
			"<img src='logo/suffix/pass.png' alt='pass' />",
			"<img src='logo/suffix/vio.png' alt='vio' />",
			"<img src='logo/suffix/list.png' alt='list' />",
			"<img src='logo/suffix/space.png' alt='space' />",
			"<img src='logo/suffix/deck.png' alt='deck' />",
			"<img src='logo/suffix/boom.png' alt='boom' />",
			"<img src='logo/suffix/task.png' alt='task' />",
			"<img src='logo/suffix/js.png' alt='dot js' />",
			"<img src='logo/suffix/desk.png' alt='desk' />");
         var randomName = Math.floor(Math.random()* nameWord.length);
         $("#name").html(nameWord[randomName]);
		 
		  var randomSuffix = Math.floor(Math.random()* suffix.length);
         $("#suffix").html(suffix[randomSuffix]);

      }