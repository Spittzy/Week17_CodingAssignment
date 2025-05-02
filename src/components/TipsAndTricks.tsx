import GardenTipOfTheDay from "./GardenTipofTheDay";
import TipsForm from "./TipsForm";

export default function TipsAndTricks() {
    return (
        <div>
            <div>
                <GardenTipOfTheDay />
            </div>
            <h1 className="text-center">Tips and Tricks</h1>
            <h3>Soil and Compost</h3>

            <ul>
                <li>Soil Types and How to Improve Yours</li>

                <li>Testing and Amending Soil (DIY tests and organic amendments)</li>

                <li>Composting for Beginners (what to compost, how, and why)</li>

                <li> Raised Beds vs. In-Ground vs. Containers</li>
            </ul>
            <h3>Planting Basics</h3>
            <ul>
                <li>Starting from Seeds vs. Buying Seedlings</li>
                <li>When and How to Plant (seasonal planting guides)</li>
                <li>Spacing and Depth Tips</li>
                <li>Labeling and Tracking Your Plants</li>
            </ul>

            <TipsForm />
        </div>
    )
}

/*
ADD LATER
. Watering and Feeding
How Much Water Does Your Garden Need?

Watering Techniques (drip irrigation, soaker hoses, hand-watering)

Fertilizer Basics (organic and synthetic options)

Mulching to Retain Moisture

6. Garden Care & Maintenance
Weeding Without Chemicals

Staking, Pruning, and Deadheading

Identifying Common Pests and Diseases

Natural Pest Control Solutions

7. Harvesting and Beyond
When and How to Harvest

Saving Seeds for Next Season

Preserving Your Harvest (drying, freezing, canning)

Preparing Your Garden for the Off-Season

8. Troubleshooting & Tips
Yellow Leaves? Stunted Growth? Common Problems and Fixes

Gardening Myths Debunked

Top 10 Beginner Mistakes (and how to avoid them)

Inspirational Stories from Fellow Gardeners
*/