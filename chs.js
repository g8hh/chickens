/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Hard. Iron Chicken Meat": "硬化铁鸡肉",
    "Hardened Chicken Meat": "硬化鸡肉",
    "Hardened Meats": "硬化肉",
    "here": "这里",
    "Hover the bolded words for more clue": "将粗体字悬停以获取更多线索",
    "http://www.retrojunkie.com/asciiart/asciiart.htm": "http://www.retrojunkie.com/asciiart/asciiart.htm",
    "I have tested these challenges again and all of them still work as of December 2021! (as long as you use the old reddit design)": "我再次测试了这些挑战，截至 2021 年 12 月，所有这些挑战仍然有效！ （只要你使用旧的reddit设计）",
    "If you ask me, this game for me is pretty much like A Dark Room +": "如果你问我，这个游戏对我来说就像 A Dark Room +",
    "If you successfully throw it into the": "如果你成功地把它扔进",
    "Inventory": "存货",
    "Iron Chicken Meat": "铁鸡肉",
    "Iron Chicken Nugget": "铁鸡块",
    "iron chicken nuggets": "铁鸡块",
    "iron chickens": "铁鸡",
    "km explored": "公里探索",
    "LIMITED": "有限的",
    "Make sure that you are using the old reddit (old.reddit.com) instead of the new reddit redesign for these challenges!": "确保您使用旧的 reddit (old.reddit.com) 而不是新的 reddit 重新设计来应对这些挑战！",
    "Material Warrior": "物质战士",
    "Meats": "肉类",
    "Menu": "菜单",
    "Message from the Developer (December 2021": "来自开发者的消息（2021 年 12 月",
    "Miscellaneous": "各种各样的",
    "More info about robots": "关于机器人的更多信息",
    "More info about this game": "关于这个游戏的更多信息",
    "my first incremental game!": "我的第一个增量游戏！",
    "Never kill any types of Glitched Chicken, killing it may glitch the game.": "切勿杀死任何类型的故障鸡，杀死它可能会导致游戏出现故障。",
    "new!": "新的！",
    "no": "不",
    "No skill": "没有技巧",
    "Normal, Iron and Gold chickens has 100% chance to drop their kind of meat": "普通鸡、铁鸡和金鸡有 100% 的几率掉落它们的肉",
    "north (↑": "北 (↑",
    "NOTE": "笔记",
    "Now you enter the password in 'challenges.html'\n\t": "现在您在“challenges.html”中输入密码\n\t",
    "only 3 rails!) →   ****64   →   Julius": "只有 3 个轨道！）→ ****64 → Julius",
    "Open this": "打开这个",
    "Other types of Chickens won't always drop their kind of meat": "其他类型的鸡不会总是掉下它们的肉",
    "participate": "参加",
    "Portal": "传送门",
    "Press": "按",
    "PROFIT (well, ignore the 3rd and the 4th instruction": "PROFIT（好吧，忽略第 3 条和第 4 条指令",
    "Raw cipher text": "原始密文",
    "Reddit Special": "Reddit 特辑",
    "robot(s) |\n": "机器人 |\n",
    "Ruby Chicken Meat": "红宝石鸡肉",
    "Ruby Chicken Nugget": "红宝石鸡块",
    "second(s": "秒",
    "Skills": "技能",
    "Slay some chickens": "杀一些鸡",
    "So, throw as many as you can! (if you have enough :D": "所以，尽可能多地扔！ （如果你有足够的：D",
    "So, throw as many as you can! (if you have enough :D)": "所以，尽可能多地扔！ （如果你有足够的：D）",
    "surf through reddit": "通过reddit冲浪",
    "Teleportation Device": "传送装置",
    "teleportation device(s)\n\t\t\tthen": "传送装置\n\t\t\tthen",
    "that leads you to a password. Then you will enter the password in a webpage that will be given to you": "这会引导您输入密码。然后，您将在提供给您的网页中输入密码",
    "The Gold Factory": "黄金工厂",
    "THE LEGENDARY MUTANT CHICKEN\n\n   |": "传说中的变异鸡\n\n |",
    "The Unconventional Weapon": "非常规武器",
    "This portal will bring you to the": "该门户将带您到",
    "this tab only appears when you append '?redditspecial=true' in the end of the URL": "此选项卡仅在您在 URL 末尾附加“?redditspecial=true”时出现",
    "those chickens (more chickens = more new chickens": "那些鸡（更多的鸡 = 更多的新鸡",
    "Those chickens won't breed if there are too many of them": "那些鸡如果太多就不会繁殖",
    "TIL that although chickens do breed, they will extinct if I kill to many of them": "直到虽然鸡确实会繁殖，但如果我杀死其中的许多鸡，它们就会灭绝",
    "to have a reddit": "有一个 reddit",
    "to the legendary mutant chicken somehow. Here is the scroll": "不知何故传给了传说中的变异鸡。这是卷轴",
    "to toggle sound": "切换声音",
    "Trader": "商人",
    "UPDATE": "更新",
    "WARNING": "警告",
    "Well, the nuggets are magically taken": "嗯，金块被神奇地拿走了",
    "What in the world is this and how it works": "这到底是什么以及它是如何工作的",
    "What you bring": "你带来的",
    "What you need to craft it": "你需要什么来制作它",
    "Wheat": "小麦",
    "When you (almost) die, you won't keep anything you bring": "当你（几乎）死了，你不会留下你带来的任何东西",
    "where I list some other things that I have created just in case you're curious. It just feels amazing knowing that there people who are still playing something I made many years ago, so once again thank": "我在这里列出了我创建的其他一些东西，以防万一你好奇。知道还有人在玩我多年前制作的东西真是太棒了，再次感谢",
    "Which Subreddit?": "哪个子版块？",
    "with a little modification": "稍加修改",
    "Workbench": "工作台",
    "World Warper": "世界大战",
    "you": "你",
    "You asked the trader about the legendary mutant chicken, he said that he doesn't know anything about it.": "你问那个商人关于传说中的变异鸡，他说他什么都不知道。",
    "You killed a chicken with your fists and you got a piece of chicken meat. (You have 2": "你用拳头杀死了一只鸡，你得到了一块鸡肉。 （你有 2",
    "You killed a chicken with your fists and you got a piece of chicken meat. (You have 3": "你用拳头杀死了一只鸡，你得到了一块鸡肉。 （你有 3",
    "Your Base": "你的基地",
    "Your Stats": "您的统计数据",
    "account": "帐户",
    "and": "和",
    "and some also requires you": "有些还需要你",
    "Autosaves in": "自动保存",
    "Available commands: go, pos, clear, examine, exit": "可用命令：go、pos、clear、examine、exit",
    "blog post I made": "我发表的博文",
    "Breeding": "育种",
    "Bring": "带来",
    "But don't worry, just kill other enemies and the \"explore further\" button will be enabled": "不过别担心，只要杀死其他敌人，“进一步探索”按钮就会启用",
    "But don't worry, those chickens will breed automatically, but you can help making the process faster by breeding": "不过别担心，那些鸡会自动繁殖，但你可以通过繁殖来帮助加快这个过程",
    "But he said that sometime ago he found an ancient scroll and he has a feeling that says that the scroll is related": "但他说前段时间他发现了一个古老的卷轴，他有一种感觉，说这个卷轴是相关的",
    "but you should give him an emerald chicken nugget as a thanks": "但你应该给他一个翡翠鸡块作为感谢",
    "challenge is:": "挑战是：",
    "Chicken Meat": "鸡肉",
    "Chicken Nugget": "鸡块",
    "chicken nuggets": "鸡块",
    "Chicken Nuggets": "鸡块",
    "chicken's mouth, it will be poisoned": "鸡嘴，会中毒",
    "chickens": "鸡",
    "chickenverse": "小鸡节",
    "Credits": "学分",
    "Dec 2021 Message": "2021 年 12 月消息",
    "Diamond Chicken Meat": "钻石鸡肉",
    "Diamond Chicken Nugget": "钻石鸡块",
    "Each time you explore further you will \"eat\" 1 chicken nugget": "每次您进一步探索时，您将“吃”1 个鸡块",
    "Emerald Chicken Meat": "翡翠鸡肉",
    "Emerald Chicken Nugget": "翡翠鸡块",
    "first": "第一的",
    "from your \"real world\" inventory.": "来自您的“现实世界”库存。",
    "Furnace": "熔炉",
    "Game saved": "游戏已保存",
    "game's subreddit": "游戏的subreddit",
    "Gold Chicken Meat": "金鸡肉",
    "Gold Chicken Nugget": "金鸡块",
    "gold chickens": "金鸡",
    "Hard. Diamond Ch. Meat": "硬化钻石之鸡肉",
    "Hard. Emerald Ch. Meat": "硬化翡翠之鸡肉",
    "Hard. Gold Chicken Meat": "硬化金之鸡肉",
    "2021 UPDATE": "2021 更新",
    "All of these challenges will require you to": "所有这些挑战都需要你",
    "Also check out": "还可以查看",
    "Boots": "靴子",
    "Chestplate": "胸甲",
    "Chicken nuggets allow you to get some skills": "鸡块让你获得一些技能",
    "Chickens! v1.3": "杀鸡！ v1.3",
    "Currently you have": "目前你有",
    "Damage": "伤害",
    "emerald chicken to make this section reappear": "翡翠鸡让这部分重新出现",
    "Give": "给予",
    "Helmet": "头盔",
    "Here are the statistics (assuming baby chickens aren't included here": "这是统计数据（假设这里不包括小鸡",
    "Hi! If you're reading this I just would like to thank you for playing this game up until now, honestly I didn't expect that this game still has some players even 7+ years after its release!": "你好！如果您正在阅读本文，我只想感谢您一直玩这款游戏，老实说我没想到这款游戏在发布 7 年多后仍然有一些玩家！",
    "However, non redditors that read the source code may also find this feature :p": "但是，阅读源代码的非 redditor 也可能会发现此功能：p",
    "HP": "生命值",
    "I'm going to use this opportunity to say that as of now I have no plans to update this game anymore. However, having said that I recently updated this game with some minor updates!": "我将利用这个机会说，截至目前我没有再更新这个游戏的计划。然而，话虽如此，我最近用一些小更新更新了这个游戏！",
    "If you enjoyed this game you can check out several other games I have made in the past:": "如果您喜欢这款游戏，您可以查看我过去制作的其他几款游戏：",
    "In these challenges you must search for a password that is hidden somewhere in reddit and you will be given a clue": "在这些挑战中，您必须搜索隐藏在 reddit 某处的密码，您将获得线索",
    "Leggings": "绑腿",
    "Luckily the trader has a friend that is very clever in deciphering codes, he is willing to help you,": "幸运的是交易者有一个非常聪明的破译密码的朋友，他愿意帮助你，",
    "Now, go ahead, the clue for the": "现在，继续，线索",
    "Oh, also before starting these challenges please copy the clue and close this game": "哦，在开始这些挑战之前，请复制线索并关闭此游戏",
    "Oh, also, do you know rumkin? Rumkin will definitely help you ;)\n": "哦，还有，你知道rumkin吗？ Rumkin 一定会帮助你 ;)\n",
    "Reddit special is a feature that is given for redditors only": "Reddit special 是一项仅提供给 reddit 用户的功能",
    "The trader wants to play a \"dice game\" with you (": "交易者想和你玩“骰子游戏”（",
    "The trader's friend said thanks and gives you the clue": "商人的朋友说谢谢，给你线索",
    "This statistics skills tells you that the number of chicken in this world (not the chickenverse) is": "这个统计技能告诉你这个世界的鸡（不是鸡宇宙）的数量是",
    "Weapon": "武器",
    "Well, so this reddit special are some \"extra challenges\" that will give you some items / benefits in-game": "嗯，所以这个 reddit 特别是一些“额外挑战”，它们会给你一些游戏中的物品/好处",
    "Well, you found this easter egg ;)\n\t": "好吧，你找到了这个复活节彩蛋 ;)\n\t",
    "You can also check out this": "你也可以看看这个",
    "You can go to": "你可以去",
    "Your skills:": "你的技能：",
    "- Chickens sound from": "- 鸡的声音来自",
    "- Scroll & Chicken ASCII Art from": "- 滚动和鸡 ASCII 艺术来自",
    "- There are": "- 这有",
    ", but you must": "，但你必须",
    ", that's why this is named \"reddit special\"": "，这就是为什么它被命名为“reddit special”",
    "\"A game\" (Minecraft based incremental game": "\"A game\"（基于Minecraft的增量游戏",
    "(Note: when you close the page, this section will disappear and you must give trader's friend another": "（注意：当您关闭页面时，此部分将消失，您必须再给交易者的朋友另一个",
    "(with a little modification": "（稍加修改",
    "You killed a chicken with your fists and you got a piece of chicken meat.": "你用拳头杀死了一只鸡，你得到了一块鸡肉。",
    "Furnace to cook stuff": "做饭的炉子",
    "This chicken meat is hardened to make it stronger, yay!": "这鸡肉经过硬化变得更强壮了，耶！",
    "Workbench to craft some items": "工作台用于制作一些物品",
    "Chicken nugget is delicious, yummy!": "鸡块好吃，嗯嗯！",
    "Chicken sword to kill more chickens faster": "鸡剑可以更快地杀死更多的鸡",
    "Iron chicken nugget is very delicious, yummy!": "铁鸡块很好吃，好吃！",
    "Killing chickens is two seconds faster now": "现在杀鸡快了两秒",
    "Speed (Killing chickens is two seconds faster now": "速度（现在杀鸡快了两秒",
    "This iron chicken meat is hardened to make it stronger, yay!": "这铁鸡肉经过硬化变得更强壮了，耶！",
    "Cooking (Using furnace is two seconds faster now": "烹饪（现在使用熔炉快了两秒",
    "Using furnace is two seconds faster now": "现在使用熔炉快了两秒",
    "This gold chicken meat is hardened to make it stronger, yay!": "这金鸡肉经过硬化，变得更强壮了，耶！",
    "Gold chicken nugget is more delicious than iron chicken nugget, yummy!": "金鸡块比铁鸡块好吃，好吃！",
    "Gold chicken sword for the win!!!": "金鸡剑，为了胜利！！！",
    "\"The door to the adventure has been opened.\"": "\“冒险的大门已经打开。\”",
    "Mechanics (Now you can make a robot to slay chickens automatically": "机械学（现在你可以制作一个机器人来自动杀鸡",
    "Now you can make a robot to slay chickens automatically": "现在你可以制作一个机器人来自动杀鸡",
    "The ancient scroll unlocks mechanic skills": "上古卷轴解锁机械学技能",
    "This better furnace allows you to smelt more things at once": "这个不错的熔炉可以让你一次熔炼更多的东西",
    "One more robot to slay more chickens": "再有一个机器人可以杀更多的鸡",
    "teleportation device(s)\n\t\t\t然后": "传送装置\n\t\t\t然后",
    "Angry Chicken": "愤怒的小鸡",
    "Angry Iron Chicken": "愤怒的铁鸡",
    "Chicken": "普通鸡",
    "chicken meat": "鸡肉",
    "gold chicken meat": "金鸡肉",
    "iron chicken meat": "铁鸡肉",
    "Gold Chicken": "金鸡",
    "Gold Chicken Sword": "金鸡剑",
    "Iron Chicken": "铁鸡",
    "Never hesitate to explore, just explore as far as you can! Something is waiting you at the end...": "勇于探索，尽你所能探索！ 有什么东西在最后等着你......",
    "None": "无",
    "The": "",
    "Trader has something more to trade with you or maybe you want to play a game??": "商人有更多东西要与您交易，或者您想玩游戏？？",
    "This ancient scroll unlocks armory skills": "这个古老的卷轴可以解锁军械库技能",
    "This much better furnace allows you to smelt 100 items at once": "这个更好的熔炉可以让你一次熔炼 100 件物品",
    "Now you can make some armors": "现在你可以制作一些盔甲",
    "Armory (Now you can make some armors": "军械库（现在你可以制作一些盔甲",
    "ancient scroll": "远古卷轴",
    "Ancient Scroll": "远古卷轴",
    "Angry Gold Chicken": "愤怒的金鸡",
    "Glitched Chicken": "故障鸡",
    "Chest": "宝箱",
    "Statistics (Now you can do some statistics job": "统计（现在你可以做一些统计工作",
    "Now you can do some statistics job": "现在你可以做一些统计工作",
    "Angry Glitched Ch.": "愤怒的故障鸡",
    "Buying wheat to avoid irony": "购买小麦以避免讽刺",
    "Diamond Chicken": "钻石鸡",
    "diamond chicken meat": "钻石鸡肉",
    "Medicines!": "药物！",
    "You almost died in battle, phew!": "你差点死在战场上，呸！",
    "Angry Diamond Ch.": "愤怒的钻石鸡",
    "Iron chicken nugget heals more hp": "铁鸡块恢复更多血量",
    "Metabolism (Iron chicken nugget heals more hp": "代谢（铁鸡块可以治疗更多的生命值）",
    "Now you can learn new skills!": "现在你可以学习新技能了！",
    "Now you can use the teleportation device": "现在你可以使用传送装置",
    "Teleportation (Now you can use the teleportation device": "传送装置（现在你可以使用传送装置",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\t\t": "\t\t",
    "\t": "\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Damage: ": "伤害: ",
    "drops a piece of ": "掉落一块 ",
    "HP: ": "生命值: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You killed (.+) chicken\(s\) with a chicken sword and you got (.+) piece\(s\) of chicken meat and (.+) piece\(s\) of iron chicken meat.$/, '你用鸡剑杀死了 $1 只鸡，你得到了 $2 鸡肉和 $3 铁鸡肉。'],
    [/^You killed (.+) chicken\(s\) with an iron chicken sword and you got (.+) piece\(s\) of chicken meat and (.+) piece\(s\) of iron chicken meat and (.+) piece\(s\) of gold chicken meat.$/, '你用鸡剑杀死了 $1 只鸡，你得到了 $2 鸡肉和 $3 铁鸡肉和 $4 黄金鸡肉。'],
    [/^You killed (.+) chicken\(s\) with a gold chicken sword and you got (.+) piece\(s\) of chicken meat and (.+) piece\(s\) of iron chicken meat and (.+) piece\(s\) of gold chicken meat.$/, '你用鸡剑杀死了 $1 只鸡，你得到了 $2 鸡肉和 $3 铁鸡肉和 $4 黄金鸡肉。'],
    [/^Exploration (.+) \(You will explore (.+) km instead of (.+) km each time you explore further$/, '探索 $1（每次进一步探索时，您将探索 $2 公里而不是 $3 公里'],
    [/^You will explore (.+) km instead of (.+) km each time you explore further$/, '每次进一步探索时，您将探索 $1 公里而不是 $2 公里'],
    [/^The dice lands on number (.+) and you get (.+) gold chicken meats!$/, '骰子落在 $1 号上，您将获得 $2 金鸡肉！'],
    [/^The dice lands on number (.+) and you get ([\d\.,]+) iron chicken meats!$/, '骰子落在 $1 号上，您将获得 $2 铁鸡肉！'],
    [/^The dice lands on number (.+) and you get ([\d\.,]+) chicken meats!$/, '骰子落在 $1 号上，您将获得 $2 鸡肉！'],
    [/^The dice lands on number(.+) and you get nothing \:\($/, '骰子落在 $1 号上，你什么也得不到 \:\('],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^only (.+) rails!\)(.+)Julius$/, '只有 $1 个轨道！）$2Julius'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);