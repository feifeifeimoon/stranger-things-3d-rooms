import SceneContainer from '@/components/scenes/SceneContainer';
import { use } from 'react';

interface RoomPageProps {
  params: Promise<{
    room: string;
  }>;
}

export default function RoomPage({ params }: RoomPageProps) {
  const resolvedParams = use(params);

  return <SceneContainer room={resolvedParams.room} />;
}