import {ProcessingScreen} from '@/components/common';

export default function TranscriptUploadProcessing({progress, studentName}) {
    return (
        <ProcessingScreen
            progress={progress}
            title={`Processing ${studentName}'s Transcript Files`}
            imageAlt="Transcript Upload"
            showComeBackLater={true}
        />
    );
}
