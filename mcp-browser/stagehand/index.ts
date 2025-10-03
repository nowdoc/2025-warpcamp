import "dotenv/config";
import { Stagehand } from "@browserbasehq/stagehand";

async function main() {
    const stagehand = new Stagehand({
        env: "LOCAL",
        modelName: "gpt-4o-mini",
        modelClientOptions: {
            baseURL: process.env.OPENAI_BASE_URL,
            apiKey: process.env.OPENAI_API_KEY,
        },
        localBrowserLaunchOptions: {
            cdpUrl: 'http://0.0.0.0:19222',
            recordVideo: { dir: './videos', size: { width: 1920, height: 1080 } },
        },
    });

    await stagehand.init();

    const page = stagehand.page;

    await page.goto("https://sledovanitv.cz");

    const agent = await stagehand.agent({
        instructions: "You're a helpful assistant that can control a web browser.",
    });

    // https://sledovanitv.cz/seznam-kanalu
    const agentResult = await agent.execute("Find all available channels, list name and timeshift (days).");
    console.log(`Agent result:\n`, agentResult);

    await stagehand.close();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
