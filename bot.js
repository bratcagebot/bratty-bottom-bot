const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

const REQUIRED_ROLE = "Brat Cage Subscriber";
const PREFIX = ".";

// Vanity roles that subscribers are allowed to assign with .role
const ALLOWED_VANITY_ROLES = ["Maidlings"];

// --- GIF LISTS ---

const hugGifs = [
    "https://media.giphy.com/media/5OqXb948EBkyUcnwHt/giphy.gif",
    "https://media.giphy.com/media/gnXG2hODaCOru/giphy.gif",
    "https://media.giphy.com/media/dRUA7wnvd3pv23dZdQ/giphy.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446205799318945886/anime-choke.gif"
];

const pegGifs = [
    "https://media.discordapp.net/attachments/1253031174448611349/1446194403298509033/berrycrepe-wake.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446194432906104853/peggy-mad.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446194474740089045/hump.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446205306970312934/hump-oomf.gif"
];

const cumonGifs = [
    "https://cdn.discordapp.com/attachments/1274247441968922704/1422655188526825613/nanahiracum_anim.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446201563830948024/pfsf1968-frog.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446201577349316708/cumon.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446204505187287050/cum-in-face.gif"
];

const sitGifs = [
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446196117607026731/cat-sit.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446196145134239774/sit.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446196177065476226/sit-down-facetime.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446211283216236668/newnewsit.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446211303268941824/newsit.gif"
];

const impregnateGifs = [
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446196451167174851/avocado-pregnant.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446196380745072722/pregnant-dance.gif",
    "https://i.pinimg.com/originals/dc/d9/9c/dcd99c937347a1ebac125a147c14a2d0.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446213449209086164/download.gif"
];

const grabGifs = [
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446196488815378525/finding-nemo-he-touched-the-butt.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446196522088661032/dexters-laboratory-mom.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446203761071489044/grabass.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446203832697753761/grab.gif"
];

const edgeGifs = [
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446221354927001713/a.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446221376511017101/aa.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446221426146279548/aaa.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446221437621899395/aaaa.gif",
    "https://cdn.discordapp.com/attachments/1253031174448611349/1446221455636431090/aaaaa.gif"
];

function randomFrom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    const knownCommands = ["hug", "peg", "cumon", "sit", "impregnate", "grab", "edge", "role"];
    if (!knownCommands.includes(command)) return;

    const member = message.member;

    // Global role gate: only Brat Cage Subscriber can use any of these commands
    const requiredRole = member.roles.cache.find(r => r.name === REQUIRED_ROLE);
    if (!requiredRole) {
        return message.reply("You must be a **Brat Cage Subscriber** to use this command 💖");
    }

    const target = message.mentions.users.first();

    // --- HUG ---
    if (command === "hug") {
        if (!target) {
            return message.reply("You need to mention someone to hug! Example: `.hug @someone`");
        }
        const gif = randomFrom(hugGifs);
        return message.channel.send({
            content: `${target}, you’ve been hugged by ${message.author}! 🤗`,
            embeds: [{ image: { url: gif } }]
        });
    }

    // --- PEG ---
    if (command === "peg") {
        if (!target) {
            return message.reply("You need to mention someone to peg! Example: `.peg @someone`");
        }
        const gif = randomFrom(pegGifs);
        return message.channel.send({
            content: `${target}, you've been pegged by ${message.author}! Take it like the little whore you are! 😏`,
            embeds: [{ image: { url: gif } }]
        });
    }

    // --- CUMON ---
    if (command === "cumon") {
        if (!target) {
            return message.reply("You need to mention someone to cum on! Example: `.cumon @someone`");
        }
        const gif = randomFrom(cumonGifs);
        return message.channel.send({
            content: `${target}, ${message.author} has just came on you... you're all sticky now 😈!`,
            embeds: [{ image: { url: gif } }]
        });
    }

    // --- SIT ---
    if (command === "sit") {
        if (!target) {
            return message.reply("You need to mention someone to sit on! Example: `.sit @someone`");
        }
        const gif = randomFrom(sitGifs);
        return message.channel.send({
            content: `${target}, ${message.author} just sat on your face! What a good little chair you are 😇`,
            embeds: [{ image: { url: gif } }]
        });
    }

    // --- IMPREGNATE ---
    if (command === "impregnate") {
        if (!target) {
            return message.reply("You need to mention someone to impregnate! Example: `.impregnate @someone`");
        }
        const gif = randomFrom(impregnateGifs);
        return message.channel.send({
            content: `${target}, you're now pregnant! ${message.author} filled you with their cum, pet 👁️`,
            embeds: [{ image: { url: gif } }]
        });
    }

    // --- GRAB ---
    if (command === "grab") {
        if (!target) {
            return message.reply("You need to mention someone to grab! Example: `.grab @someone`");
        }
        const gif = randomFrom(grabGifs);
        return message.channel.send({
            content: `${target}, ${message.author} just grabbed a handful of your ass... did you like it? 👁️`,
            embeds: [{ image: { url: gif } }]
        });
    }

    // --- EDGE ---
    if (command === "edge") {
        if (!target) {
            return message.reply("You need to mention someone to edge! Example: `.edge @someone`");
        }
        const gif = randomFrom(edgeGifs);
        return message.channel.send({
            content: `${target}, ${message.author} is edging you... you better not cum until they give you permission 😈`,
            embeds: [{ image: { url: gif } }]
        });
    }

    // --- ROLE (subscriber vanity role toggle, restricted to specific roles) ---
    if (command === "role") {
        const targetMember = message.mentions.members.first();
        const targetRole = message.mentions.roles.first();

        if (!targetMember) {
            return message.reply("You need to mention **someone** to give/remove a role. Example: `.role @user @Maidlings`");
        }

        if (!targetRole) {
            return message.reply("You need to mention the **role** as well. Example: `.role @user @Maidlings`");
        }

        // Ensure this role is in the allowed vanity roles list
        if (!ALLOWED_VANITY_ROLES.includes(targetRole.name)) {
            return message.reply(`You can only use this command with your assigned vanity role: **${ALLOWED_VANITY_ROLES.join(", ")}**.`);
        }

        // Make sure the bot can actually manage this role
        const botMember = message.guild.members.me;
        if (!botMember.roles.highest || botMember.roles.highest.position <= targetRole.position) {
            return message.reply("I can't manage that role. Please move my bot role **above** that role in the server settings.");
        }

        // Toggle logic
        if (targetMember.roles.cache.has(targetRole.id)) {
            return targetMember.roles.remove(targetRole)
                .then(() => {
                    message.reply(`Removed ${targetRole} from ${targetMember}.`);
                })
                .catch(err => {
                    console.error(err);
                    message.reply("I couldn't remove that role. Check my permissions and role position.");
                });
        } else {
            return targetMember.roles.add(targetRole)
                .then(() => {
                    message.reply(`Gave ${targetRole} to ${targetMember}.`);
                })
                .catch(err => {
                    console.error(err);
                    message.reply("I couldn't give that role. Check my permissions and role position.");
                });
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
