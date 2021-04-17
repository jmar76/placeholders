"""empty message

Revision ID: ff1527af738b
Revises: e0f9c3622f20
Create Date: 2021-04-15 19:41:59.245619

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ff1527af738b'
down_revision = 'e0f9c3622f20'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('propiedad', sa.Column('bathrooms', sa.String(length=120), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('propiedad', 'bathrooms')
    # ### end Alembic commands ###