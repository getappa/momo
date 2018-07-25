import React from 'react';
import { Grid, Row, Column } from '@opensanca/burro-react';

export const AdminDashboard = () => (
    <Grid>
        <Row>
            <Column xs={12}>
                <div>
                    General Status
                </div>
            </Column>
        </Row>
        <Row>
            <Column xs={6}>
                <div>
                    Tasks
                </div>
            </Column>
            <Column xs={6}>
                <div>
                    Process Entities
                </div>
            </Column>
        </Row>
    </Grid>
);

export default AdminDashboard;