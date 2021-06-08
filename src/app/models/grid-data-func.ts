import { Grid } from './grid';
import { GridData } from './grid-data';

export function getGridListFunction(): Grid[] {
    const gridList: Grid[] = [
        new Grid(0, 1, '1', '4', '1', '8em', '1em', [
            new GridData(1, '1', 'Market Share', '1', '1', 'rgb(252, 164, 179)'),
            new GridData(2, '2', 'Opportunity Size', '1', '1', 'rgb(161, 180, 255)'),
            new GridData(3, '3', 'Opportunity Numbers', '1', '1', 'rgb(140, 240, 120)'),
            new GridData(4, '3', 'FOUR', '1', '1', 'rgb(250, 255, 163)')
        ]
        ),
        new Grid(0, 2, '1', '2', '1', '16em', '1em', [
            new GridData(1, '1', 'Top Firms By Pipeline Value', '1', '1', 'rgb(180, 217, 233)'),
            new GridData(2, '2', 'Top Firms By Pipeline', '1', '1', 'rgb(238, 147, 250)')
        ]
        ),
        new Grid(0, 3, '1', '1', '1', '24em', '1em', [
            new GridData(1, '1', 'Quadrant Graph', '1', '1', 'rgb(237, 200, 154)')
        ]
        ),
        new Grid(1, 3, '1', '4', '1', '8em', '1em', [
            new GridData(1, '1', 'ONE', '1', '1', 'rgb(252, 164, 179)'),
            new GridData(2, '2', 'Opportunity Number', '1', '1', 'rgb(161, 180, 255)'),
            new GridData(3, '3', 'Opportunty Size', '1', '1', 'rgb(140, 240, 120)'),
            new GridData(4, '3', 'Market Share', '1', '1', 'rgb(250, 255, 163)')
        ]
        ),
        new Grid(1, 1, '1', '2', '1', '16em', '1em', [
            new GridData(1, '1', 'FIVE', '1', '1', 'rgb(217, 217, 217)'),
            new GridData(2, '2', 'SIX', '1', '1', 'rgb(238, 147, 250)')
        ]
        ),
        new Grid(1, 2, '1', '1', '1', '24em', '1em', [
            new GridData(1, '1', 'SEVEN', '1', '1', 'rgb(237, 200, 154)')
        ]
        ),
        new Grid(2, 1, '1', '4', '1', '8em', '1em', [
            new GridData(1, '1', 'ONE', '1', '1', 'rgb(252, 164, 179)'),
            new GridData(2, '2', 'TWO', '1', '1', 'rgb(161, 180, 255)'),
            new GridData(3, '3', 'THREE', '1', '1', 'rgb(140, 240, 120)'),
            new GridData(4, '3', 'FOUR', '1', '1', 'rgb(250, 255, 163)')
        ]
        ),
        new Grid(2, 2, '1', '2', '1', '16em', '1em', [
            new GridData(1, '1', 'FIVE', '1', '1', 'rgb(217, 217, 217)'),
            new GridData(2, '2', 'SIX', '1', '1', 'rgb(238, 147, 250)')
        ]
        ),
        new Grid(2, 3, '1', '1', '1', '24em', '1em', [
            new GridData(1, '1', 'SEVEN', '1', '1', 'rgb(237, 200, 154)')
        ]
        ),
        new Grid(3, 1, '1', '4', '1', '8em', '2em', [
            new GridData(1, '1', 'ONE', '1', '1', 'rgb(252, 164, 179)'),
            new GridData(2, '2', 'TWO', '1', '1', 'rgb(161, 180, 255)'),
            new GridData(3, '3', 'THREE', '1', '1', 'rgb(140, 240, 120)'),
            new GridData(4, '3', 'FOUR', '1', '1', 'rgb(250, 255, 163)')
        ]
        ),
        new Grid(3, 2, '1', '2', '1', '16em', '2em', [
            new GridData(1, '1', 'FIVE', '1', '1', 'rgb(217, 217, 217)'),
            new GridData(2, '2', 'SIX', '1', '1', 'rgb(238, 147, 250)')
        ]
        ),
        new Grid(3, 3, '1', '1', '1', '24em', '2em', [
            new GridData(1, '1', 'SEVEN', '1', '1', 'rgb(237, 200, 154)')
        ]
        ),
        new Grid(4, 1, '1', '4', '1', '8em', '2em', [
            new GridData(1, '1', 'ONE', '1', '1', 'rgb(252, 164, 179)'),
            new GridData(2, '2', 'TWO', '1', '1', 'rgb(161, 180, 255)'),
            new GridData(3, '3', 'THREE', '1', '1', 'rgb(140, 240, 120)'),
            new GridData(4, '3', 'FOUR', '1', '1', 'rgb(250, 255, 163)')
        ]
        ),
        new Grid(4, 2, '1', '2', '1', '16em', '2em', [
            new GridData(1, '1', 'FIVE', '1', '1', 'rgb(217, 217, 217)'),
            new GridData(2, '2', 'SIX', '1', '1', 'rgb(238, 147, 250)')
        ]
        ),
        new Grid(4, 3, '1', '1', '1', '24em', '2em', [
            new GridData(1, '1', 'SEVEN', '1', '1', 'rgb(237, 200, 154)')
        ]
        ),
        new Grid(5, 1, '1', '4', '1', '8em', '2em', [
            new GridData(1, '1', 'ONE', '1', '1', 'rgb(252, 164, 179)'),
            new GridData(2, '2', 'TWO', '1', '1', 'rgb(161, 180, 255)'),
            new GridData(3, '3', 'THREE', '1', '1', 'rgb(140, 240, 120)'),
            new GridData(4, '3', 'FOUR', '1', '1', 'rgb(250, 255, 163)')
        ]
        ),
        new Grid(5, 2, '1', '2', '1', '16em', '2em', [
            new GridData(1, '1', 'FIVE', '1', '1', 'rgb(217, 217, 217)'),
            new GridData(2, '2', 'SIX', '1', '1', 'rgb(238, 147, 250)')
        ]
        ),
        new Grid(5, 3, '1', '1', '1', '24em', '2em', [
            new GridData(1, '1', 'SEVEN', '1', '1', 'rgb(237, 200, 154)')
        ]
        ),
        new Grid(6, 1, '1', '4', '1', '8em', '2em', [
            new GridData(1, '1', 'ONE', '1', '1', 'rgb(252, 164, 179)'),
            new GridData(2, '2', 'TWO', '1', '1', 'rgb(161, 180, 255)'),
            new GridData(3, '3', 'THREE', '1', '1', 'rgb(140, 240, 120)'),
            new GridData(4, '3', 'FOUR', '1', '1', 'rgb(250, 255, 163)')
        ]
        ),
        new Grid(6, 2, '1', '2', '1', '16em', '2em', [
            new GridData(1, '1', 'FIVE', '1', '1', 'rgb(217, 217, 217)'),
            new GridData(2, '2', 'SIX', '1', '1', 'rgb(238, 147, 250)')
        ]
        ),
        new Grid(6, 3, '1', '1', '1', '24em', '2em', [
            new GridData(1, '1', 'SEVEN', '1', '1', 'rgb(237, 200, 154)')
        ]
        )
    ];

    return gridList;
}
