import { Card, Center } from '@mantine/core';
import Todos from '../Todo/Todos';

import WriteHome from './WriteHome';

function Home() {

    return (
        <Center>
            <Card shadow="sm" p="lg" radius="md" withBorder sx={{ width: 'min(700px, 95%)' }}>

                <WriteHome />
                <Todos />
            </Card>
        </Center>
    )
}

export default Home