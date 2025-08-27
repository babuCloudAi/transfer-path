import {ProcessingScreen} from '../common';

export default function AlumniBannerProcessing({progress}) {
    return (
        <ProcessingScreen
            progress={progress}
            title="Obtaining Alumni"
            subtitle="Enrollment History from Banner"
            imageAlt="Alumni Banner Processing"
            onComeBackLater={() => console.log('User chose to come back later')}
        />
    );
}
