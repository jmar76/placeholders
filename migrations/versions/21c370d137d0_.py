"""empty message

Revision ID: 21c370d137d0
Revises: 217dc66a7be1
Create Date: 2021-05-08 10:45:56.040551

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '21c370d137d0'
down_revision = '217dc66a7be1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('propiedad', sa.Column('precio', sa.String(length=120), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('propiedad', 'precio')
    # ### end Alembic commands ###
