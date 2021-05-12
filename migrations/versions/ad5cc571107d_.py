"""empty message

Revision ID: ad5cc571107d
Revises: 380a9a5eae61
Create Date: 2021-05-11 16:49:33.895571

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ad5cc571107d'
down_revision = '380a9a5eae61'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('propiedad', 'huespedes')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('propiedad', sa.Column('huespedes', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    # ### end Alembic commands ###